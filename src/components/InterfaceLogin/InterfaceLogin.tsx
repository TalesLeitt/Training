import { AbsoluteCenter, Box , Card, Field, Input, Button, Stack, Center} from "@chakra-ui/react";
import { PasswordInput, PasswordStrengthMeter } from "../ui/password-input";

export const InterfaceLogin = () => {
    return (
        <>
            <Box width="100%">
                <AbsoluteCenter>
                    <Card.Root maxW="sm">
                        <Card.Header>
                            <Center>
                                <Card.Title>Sing up</Card.Title>
                            </Center>
                                <Card.Description>
                                    Fill in the form below to create an account
                                </Card.Description>                            
                        </Card.Header>
                        <Card.Body>
                            <Stack gap="4" w="full">
                                <Field.Root>
                                    <Box pos="relative" w="full">
                                        <Input />
                                        <Field.Label>Username</Field.Label>
                                    </Box>                                    
                                </Field.Root>
                                <Field.Root>
                                    <Stack w="full">
                                        <Box pos="relative" w="full">                                       
                                            <PasswordInput />
                                            <Field.Label >Password</Field.Label>
                                            <PasswordStrengthMeter value={4}/>
                                        </Box>    
                                    </Stack>
                                </Field.Root>
                            </Stack>
                        </Card.Body>
                        <Card.Footer justifyContent="flex-end">
                            <Button variant="outline">Cancel</Button>
                            <Button variant="solid">Sign in</Button>
                        </Card.Footer>
                    </Card.Root>
                </AbsoluteCenter>
            </Box>
        </>
    )
}
