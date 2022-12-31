import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import NextLink from "next/link";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
type Props = {
    title: string;
    link: string;
};

export default function Header(props: Props) {
    return (
        <AppBar position="fixed">
            <Toolbar
                sx={{
                    justifyContent: "space-between",
                    minHeight: "48px",
                    height: "48px",
                }}
            >
                {props.link ? (
                    <NextLink href={props.link}>
                        <ArrowBackIosNewIcon />
                    </NextLink>
                ) : (
                    <Typography sx={{ flexGrow: 0 }}></Typography>
                )}

                <Typography sx={{ flexGrow: 0 }}>{props.title}</Typography>
                <Typography sx={{ flexGrow: 0 }}></Typography>
            </Toolbar>
        </AppBar>
    );
}