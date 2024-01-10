import { Stack, styled } from "@mui/material";

export const FlexSpacer = styled("div")({ flex: "auto" });

type DirectionlessStackProps = Omit<
    React.ComponentProps<typeof Stack>,
    "direction"
>;
export const FlexRow = (props: DirectionlessStackProps) => {
    const { children, ...other } = props;
    return (
        <Stack direction="row" {...other}>
            {children}
        </Stack>
    );
};

export const FlexColumn = (props: DirectionlessStackProps) => {
    const { children, ...other } = props;
    return (
        <Stack direction="column" {...other}>
            {children}
        </Stack>
    );
};
