import React, { useState } from "react";
import { WithChildren } from "../util";
import { FlexColumn, FlexRow } from ".";
import { Button } from "@mui/material";

export const Menu = ({ children }: WithChildren) => {
    const [selected, setSelected] = useState<number | undefined>(undefined);
    const rows = React.Children.toArray(children);

    const onClick = (index: number | undefined) => {
        setSelected(index);
    };

    return (
        <FlexRow width="100%" justifyContent="space-between">
            <FlexColumn alignItems="start" flex="1" maxWidth="25%" rowGap="5px">
                <Button
                    fullWidth
                    variant="contained"
                    onClick={() => onClick(undefined)}
                    color="error"
                >
                    Clear
                </Button>
                {rows.map((item, index) => (
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => onClick(index)}
                    >
                        {item.props.title}
                    </Button>
                ))}
            </FlexColumn>
            <FlexColumn alignItems="center" flex="1" maxWidth="70%">
                {rows[selected]}
            </FlexColumn>
        </FlexRow>
    );
};

interface MenuItemProps {
    title: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MenuItem = ({ title, children }: WithChildren<MenuItemProps>) => {
    return <>{children}</>;
};
