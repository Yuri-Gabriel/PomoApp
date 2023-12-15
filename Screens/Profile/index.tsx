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
    private iconUser: string;

    constructor(props: ProfileProps) {
        super(props);

        this.username = this.props.route.params.username;
        this.email = this.props.route.params.email;
        this.iconUser = this.props.route.params.iconUser;
        this.state = {
            PreDefinitions: [
                {name: 'Estudar'},
                {name: 'Trabalho'},
                {name: 'Estudar'},
                {name: 'Trabalho'},
                {name: 'Estudar'},
                {name: 'Trabalho'},
                {name: 'Estudar'},
                {name: 'Trabalho'},
                {name: 'Estudar'},
                {name: 'Trabalho'},
                {name: 'Estudar'},
                {name: 'Trabalho'},
            ]
        }
    }

    render() {

        return (
            <Container>
                <IconUser source={require('../../Assets/userIcon.png')}/>
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
                                <PreDefinitionButton>
                                    <PreDefinitionButtonText>
                                        {value.name}
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