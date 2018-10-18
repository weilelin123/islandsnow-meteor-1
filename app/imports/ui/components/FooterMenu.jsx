import React from 'react';
import { Grid, List, Input, Button } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
    render() {
        return (
            <Grid className="footer-background">
                <Grid columns={3} centered container>
                    <Grid.Column>
                        NAVIGATION
                        <hr/>
                        <List>
                            <List.Item>About us</List.Item>
                            <List.Item>Employment</List.Item>
                            <List.Item>Video</List.Item>
                            <List.Item>Store Locations</List.Item>
                            <List.Item>Shipping & Returns</List.Item>
                            <List.Item>Terms & Conditions</List.Item>
                            <List.Item>Privacy Policy</List.Item>
                        </List>
                    </Grid.Column>

                    <Grid.Column>
                        MAIN MENU
                        <hr/>
                        <List>
                            <List.Item>Men</List.Item>
                            <List.Item>Women</List.Item>
                            <List.Item>Kids</List.Item>
                            <List.Item>Brands</List.Item>
                            <List.Item>Search</List.Item>
                        </List>
                    </Grid.Column>

                    <Grid.Column>
                        CONNECT
                        <hr/>
                        <List>
                            <List.Item>Sign up for the latest updates</List.Item>
                            <List.Item horizontal>
                                <Input placeholder="Enter Email Address"/><Button color='black'>Join</Button>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid>
            </Grid>
        );
    }
}