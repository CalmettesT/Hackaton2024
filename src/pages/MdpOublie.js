import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
} from "@material-tailwind/react";

export function Reset() {
    return (
        <section className="h-screen w-full p-4">
            <div className="relative h-[50vh] w-full overflow-hidden rounded-xl">
                <img
                    src={`https://www.material-tailwind.com/img/bg-reset.avif`}
                    alt="image de fond"
                    className="h-full w-full object-cover"
                />
                <div className="absolute top-0 left-0 h-full w-full bg-black/50" />
            </div>
            <div className="container mx-auto -mt-32 grid justify-center">
                <Card className="mx-4 md:w-[26rem]">
                    <CardHeader
                        color="gray"
                        className="mb-4 grid place-items-center py-8 px-4 text-center"
                    >
                        <Typography variant="h3" color="white" className="mb-2">
                            Réinitialiser le mot de passe
                        </Typography>
                        <Typography variant="small" color="white">
                            Vous recevrez un e-mail dans un délai maximum de 60 secondes
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input
                            color="gray"
                            variant="static"
                            label="Email"
                            size="lg"
                            placeholder="john@example.com"
                        />
                        <Button color="gray" className="mt-4" fullWidth>
                            Réinitialiser
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </section>
    );
}

export default Reset;
