import { Button, TextField } from '@mui/material';
import React, { Component } from 'react';
import { useState } from 'react';

export default function index({reviews}) {
    const [search, setSearch] = useState("");
    const router = useRouter();

    return (<>
        <TextField fullWidth value={search}
                   onChange={(e) => setSearch(e.target.value)}>
        </TextField>
        <Button >

        </Button>
    </>);
}