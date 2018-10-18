import React from 'react';
import { Menu, Dropdown, Grid } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
    render() {
        return (
            <Menu secondary>
                <Grid centered container>
                    <Dropdown item text="MEN">
                        <Dropdown.Menu>
                            <Dropdown.Item>TANK TOPS</Dropdown.Item>
                            <Dropdown.Item>SHIRTS</Dropdown.Item>
                            <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
                            <Dropdown.Item>SWEATSHIRTS & JACKETS</Dropdown.Item>
                            <Dropdown.Item>ALOHA SHIRTS</Dropdown.Item>
                            <Dropdown.Item>BOARDSHORTS & POOL SHORTS</Dropdown.Item>
                            <Dropdown.Item>HATS</Dropdown.Item>
                            <Dropdown.Item>ACCESSORIES</Dropdown.Item>
                            <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
                            <Dropdown.Item>STICKERS</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown item text="WOMEN">
                        <Dropdown.Menu>
                            <Dropdown.Item>TANK TOPS</Dropdown.Item>
                            <Dropdown.Item>SHIRTS</Dropdown.Item>
                            <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
                            <Dropdown.Item>SWEATSHIRTS</Dropdown.Item>
                            <Dropdown.Item>HATS</Dropdown.Item>
                            <Dropdown.Item>ACCESSORIES</Dropdown.Item>
                            <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
                            <Dropdown.Item>STICKERS</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown item text="KIDS">
                        <Dropdown.Menu>
                            <Dropdown.Item>SHIRTS</Dropdown.Item>
                            <Dropdown.Item>ONESIES</Dropdown.Item>
                            <Dropdown.Item>SWEATSHIRTS</Dropdown.Item>
                            <Dropdown.Item>ACCESSORIES</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown item text="BRANDS">
                        <Dropdown.Menu>
                            <Dropdown.Item>ALOHA SURF PROJECT</Dropdown.Item>
                            <Dropdown.Item>DA MOKES</Dropdown.Item>
                            <Dropdown.Item>FARMERS MARKET HAWAII</Dropdown.Item>
                            <Dropdown.Item>HAWAII DOMESTIC MARKET</Dropdown.Item>
                            <Dropdown.Item>HERSCHEL SUPPLY CO.</Dropdown.Item>
                            <Dropdown.Item>HILIFE</Dropdown.Item>
                            <Dropdown.Item>ISLAND SNOW HAWAII</Dropdown.Item>
                            <Dropdown.Item>KAILUA BOYS</Dropdown.Item>
                            <Dropdown.Item>KAILUA FIRLS</Dropdown.Item>
                            <Dropdown.Item>LANIKAI CANOE CLUB</Dropdown.Item>
                            <Dropdown.Item>MOKULUA HULA</Dropdown.Item>
                            <Dropdown.Item>PATAGONIA</Dropdown.Item>
                            <Dropdown.Item>REYN SPOONER</Dropdown.Item>
                            <Dropdown.Item>RVCA HAWAII</Dropdown.Item>
                            <Dropdown.Item>SRF</Dropdown.Item>
                            <Dropdown.Item>STANCE</Dropdown.Item>
                            <Dropdown.Item>STUSSY</Dropdown.Item>
                            <Dropdown.Item>TORI RICHARD</Dropdown.Item>
                            <Dropdown.Item>VOLCOM HAWAII</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item fitted>SEARCH</Menu.Item>
                </Grid>
            </Menu>
        );
    }
}