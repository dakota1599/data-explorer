import React from "react";

export type WithChildren<T = unknown> = React.PropsWithChildren<T>;

export type FileState = {
    name: string;
    contents: string;
    set: boolean;
    objects: unknown[];
    keys: string[];
};
