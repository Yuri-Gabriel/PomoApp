/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from "react";

import {
    Title,
    Container,
    Button,
    ButtonLabel,
    ButtonContainer,
    NumberContainer,
    NumberLabel
} from './style';

const ChangeNumber = ({title, value, setValue}: any) => {

    const IncreaseValue = (v: number) => {
        if (v < 99) {
            setValue(v + 1);
        }
    }
    const DecreaseValue = (v: number) => {
        if (v > 1) {
            setValue(v -1 );
        }
    }

    return (
        <Container>
            <Title>
                {title}
            </Title>
            <ButtonContainer>
                <Button>
                    <ButtonLabel onPress={() => {
                        IncreaseValue(value);
                    }}>
                        ^
                    </ButtonLabel>
                </Button>
                <Button style={{
                    marginTop: 10
                }} onPress={() => {
                    DecreaseValue(value)
                }}>
                    <ButtonLabel style={{
                        transform: [
                            { rotate: "180deg" }
                        ],
                        marginBottom: -10
                    }}>
                        ^
                    </ButtonLabel>
                </Button>
            </ButtonContainer>
            <NumberContainer>
                    <NumberLabel>
                        {
                            value<10?`0${value}`:value
                        }
                    </NumberLabel>
            </NumberContainer>
        </Container>
    );
}

export default ChangeNumber;