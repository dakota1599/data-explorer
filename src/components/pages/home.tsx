import { useAppSelector } from "../../util/hooks";

export const Home = () => {
    const fileState = useAppSelector((state) => state.file);

    console.log(fileState.keys);
    console.log(fileState.objects);
    return <>Home</>;
};
