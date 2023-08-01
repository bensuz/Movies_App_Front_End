import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

const Register = () => {
    return (
        <Card
            color="transparent"
            shadow={false}
            className="py-[400px] mx-auto w-1/2 h-[700px] flex items-center justify-center "
        >
            <Typography variant="h4" color="blue-gray" className="font-bold">
                Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Enter your details to register.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="2xl" label="First Name" />
                    <Input size="2xl" label="Last Name" />
                    <Input size="2xl" label="Email" />
                    <Input type="password" size="2xl" label="Password" />
                </div>
                <Checkbox
                    label={
                        <Typography
                            variant="small"
                            color="gray"
                            className="flex items-center font-normal"
                        >
                            I agree the
                            <a
                                href="#"
                                className="font-medium transition-colors text-blue-500"
                            >
                                &nbsp;Terms and Conditions
                            </a>
                        </Typography>
                    }
                    containerProps={{ className: "-ml-2.5 w-10 " }}
                />
                <Button className="mt-6" fullWidth>
                    Register
                </Button>
                <Typography
                    color="gray"
                    className="mt-4 text-center font-normal"
                >
                    Already have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                    >
                        Sign In
                    </a>
                </Typography>
            </form>
        </Card>
    );
};

export default Register;
