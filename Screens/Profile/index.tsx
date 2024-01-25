import React from 'react';

import {
    Container,
    IconUser,
    UserTextInfo,
    ExitAccountButton,
    ExitAccountButtonText,
    SlideBarContainer,
    SlideBar,
    PreDefinitionButton,
    PreDefinitionButtonText
} from './style';

import { ProfileProps, ProfileState } from '../types';

class Profile extends React.Component<ProfileProps, ProfileState> {

    private username: string;
    private email: string;
    private userID: number;

    constructor(props: ProfileProps) {
        super(props);

        this.username = this.props.route.params.username;
        this.email = this.props.route.params.email;
        this.userID = this.props.route.params.userID;
        this.state = {
            PreDefinitions: this.props.route.params.timers
        }
    }

    render() {

        return (
            <Container>
                <UserTextInfo>
                    {this.username}
                </UserTextInfo>
                <UserTextInfo>
                    {this.email}
                </UserTextInfo>
                <SlideBarContainer>
                    {this.state.PreDefinitions?
                        <SlideBar scrollEnabled>
                            {this.state.PreDefinitions.map((value, key) =>
                                <PreDefinitionButton onPress={() => {
                                    this.props.navigation.reset({
                                        routes: [{
                                            name: "SetTimer",
                                            params: {
                                                username: this.username,
                                                workTime: value.forwork,
                                                numberOfSessions: value.sessions,
                                                pauseTime: value.forpause,
                                                userID: this.userID,
                                            }
                                        }]
                                    })
                                }}>
                                    <PreDefinitionButtonText>
                                        {value.timer_name}
                                    </PreDefinitionButtonText>
                                </PreDefinitionButton>
                            )}
                        </SlideBar>
                    :
                        <UserTextInfo style={{
                            fontSize: 15,
                            textAlign: 'center'
                        }}>
                            Sem pré definições definidas!
                        </UserTextInfo>
                    }
                    
                </SlideBarContainer>
                <ExitAccountButton onPress={() => {
                    this.props.navigation.reset({
                        routes: [{
                            name: 'StartScreen'
                        }],
                    });
                }}>
                    <ExitAccountButtonText>
                        Sair
                    </ExitAccountButtonText>
                </ExitAccountButton>
            </Container>
        );
    }
}

export default Profile;