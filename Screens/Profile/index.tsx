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

import Conn from '../../Api/conection';

import { User } from '../../Api/entitys';

import DeleteTimer from '../Components/DeleteTimer';

class Profile extends React.Component<ProfileProps, ProfileState> {

    private username: string;
    private email: string;
    private password: string;
    private userID: number;

    constructor(props: ProfileProps) {
        super(props);

        this.username = this.props.route.params.username;
        this.email = this.props.route.params.email;
        this.password = this.props.route.params.password;
        this.userID = this.props.route.params.userID;
        this.state = {
            PreDefinitions: [],
            showPrompt: false,
            timer_Name_delete: '',
            timer_ID_delete: 0,
        }
    }

    async componentDidMount() {
        const GetUser = async (): Promise<User> => {
            return await Conn.LoginUser({
                useremails: this.email,
                userpassword: this.password
            })
        }

        const user = await GetUser();

        if(this.state.PreDefinitions != user.timers) {
            this.setState({
                PreDefinitions: user.timers
            })
        }
    }

    async DeletarTimer() {
        await Conn.DeleteTimer(this.state.timer_ID_delete, this.userID);
        this.setState({ showPrompt: false });
        alert("Timer deletado")
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

                                    
                                }}
                                onLongPress={() => {
                                    this.setState({
                                        showPrompt: true,
                                        timer_Name_delete: value.timer_name,
                                        timer_ID_delete: value.timer_id
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
                {this.state.showPrompt && 
                    <DeleteTimer
                        func_close={() => {
                            this.setState({ showPrompt: false });
                        }}
                        func_deletar={() => this.DeletarTimer()}
                        timer_name={this.state.timer_Name_delete}
                    />
                }
            </Container>
        );
    }
}

export default Profile;