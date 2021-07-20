import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from '../elements/HireMeElements'

const HireMe = () => {
    return (
        <>
        <Container>
         <FormWrap>
          <Icon to="/">lester</Icon>
          <FormContent>
            <Form action="#">
            <FormH1>Contact Me</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' required />
            <FormLabel htmlFor='for'>Job Specification</FormLabel>
            <FormInput type='text' required />
            <FormButton type='submit'>Contact</FormButton>
            <Text>Forget password</Text>
            </Form>
          </FormContent>
         </FormWrap>
        </Container>   
        </>
    )
}

export default HireMe
