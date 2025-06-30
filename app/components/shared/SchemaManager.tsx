'use client';

import React from 'react';
import { OrganizationSchema } from './OrganizationSchema';
import { SoftwareApplicationSchema } from './SoftwareApplicationSchema';

interface SchemaManagerProps {
  schemas?: ('organization' | 'softwareApplication')[];
}

export const SchemaManager: React.FC<SchemaManagerProps> = ({ 
  schemas = ['organization', 'softwareApplication'] 
}) => {
  return (
    <>
      {schemas.includes('organization') && <OrganizationSchema />}
      {schemas.includes('softwareApplication') && <SoftwareApplicationSchema />}
    </>
  );
};

export default SchemaManager;