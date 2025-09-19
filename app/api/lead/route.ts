import { NextRequest, NextResponse } from 'next/server';

interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  clinicName: string;
  timestamp: Date;
  source: string;
}

async function sendToCRM(leadData: Omit<Lead, 'id' | 'timestamp'>) {
  console.log('Sending to CRM:', leadData);
  return { success: true, crmId: 'crm_' + Date.now() };
}

async function sendEmail(email: string, firstName: string) {
  console.log('Sending confirmation email to:', email);
  return { success: true, messageId: 'msg_' + Date.now() };
}

async function triggerAutomation(leadData: Omit<Lead, 'id' | 'timestamp'>) {
  console.log('Triggering automation for:', leadData.email);
  return { success: true, workflowId: 'wf_' + Date.now() };
}

async function saveLead(leadData: Omit<Lead, 'id' | 'timestamp'>): Promise<Lead> {
  const lead: Lead = {
    id: 'lead_' + Date.now(),
    ...leadData,
    timestamp: new Date(),
  };

  console.log('Saving lead to database:', lead);

  return lead;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { firstName, lastName, email, phoneNumber, clinicName } = body;

    if (!firstName || !lastName || !email || !phoneNumber || !clinicName) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const leadData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      clinicName,
      source: 'starter-pack-landing',
    };

    const savedLead = await saveLead(leadData);

    const crmPromise = sendToCRM(leadData);

    const emailPromise = sendEmail(email, firstName);

    const automationPromise = triggerAutomation(leadData);

    const [crmResult, emailResult, automationResult] = await Promise.allSettled([
      crmPromise,
      emailPromise,
      automationPromise,
    ]);

    console.log('CRM Result:', crmResult);
    console.log('Email Result:', emailResult);
    console.log('Automation Result:', automationResult);

    return NextResponse.json({
      success: true,
      leadId: savedLead.id,
      message: 'Lead successfully processed',
    });

  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}