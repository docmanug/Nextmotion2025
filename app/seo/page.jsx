"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SEO = () => {
    const [url, setUrl] = useState("");

    const handleChange = (e) => {
        setUrl(e.target.value);
    };

    const onFinish = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/sitemapIndex", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                url: url,
            }),
        });

        // Check the response status code
        if (response.status === 200) {
            console.log("Url submitted successfully");
        } else {
            console.log(response.statusText);
        }
    };

    return (
        <form onSubmit={onFinish} className="flex items-center mt-24 mb-10 ml-4 gap-2 max-w-md">
            <Input
                onChange={handleChange}
                name="url"
                type="text"
                placeholder="Url Structure:- https://yourwebsite.com"
                required
                value={url}
            />
            <Button type="submit" variant="default" size="default">Submit</Button>
        </form>
    );
};

export default SEO; 