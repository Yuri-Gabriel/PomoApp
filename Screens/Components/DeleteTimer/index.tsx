import React, {useState} from "react";

import {
    MainContainer,
    Container,
    Text,
    HeaderContainer,
    CloseIcon,
    CloseIconButton,
    BodyContainer,
    DeleteButton,
    DeleteButtonText
} from './style';

import { DeleteTimerProps, DeleteTimerState } from '../../types';

class DeleteTimer extends React.Component<DeleteTimerProps, DeleteTimerState> {

    private timer_name: string;
    private func_close: Function;
    private func_deletar: Function;

    constructor(props: DeleteTimerProps) {
        super(props);

        this.timer_name = this.props.timer_name;
        this.func_close = this.props.func_close;
        this.func_deletar = this.props.func_deletar;
    }

    render() {
        return (
            <MainContainer>
                <Container>
                    <HeaderContainer>
                        <CloseIconButton onPress={() => this.func_close()}>
                            <CloseIcon source={require('../../../Assets/close-line.png')}/>
                        </CloseIconButton>
                    </HeaderContainer>
                    <BodyContainer>
                        <Text>Deseja apagar o timer "{this.timer_name}"?</Text>
                        <DeleteButton onPress={() => this.func_deletar()}>
                            <DeleteButtonText>Apagar</DeleteButtonText>
                        </DeleteButton>
                    </BodyContainer>
                </Container>
            </MainContainer>
        );
    }
    
}

export default DeleteTimer;