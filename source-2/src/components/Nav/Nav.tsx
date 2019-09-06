import {
    Alignment,
    Button,
    IconName,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Tab,
    Tabs
} from '@blueprintjs/core'
import classnames from 'classnames'
import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export enum PageSections {
    BIO = 'BIO',
    WORK = 'WORK',
    CONTACT = 'CONTACT'
}

export const links: Array<{ text: string; to: string; icon?: IconName }> = [
    { text: 'About Me', to: `#${PageSections.BIO}`, icon: 'home' },
    { text: 'Projects', to: `#${PageSections.WORK}`, icon: 'applications' },
    { text: 'Contact', to: `#${PageSections.CONTACT}`, icon: 'new-person' }
]

interface NavState {
    selectedTabId: string
}

class Nav extends Component<{}, NavState> {
    public constructor(props) {
        super(props)
        this.state = {
            selectedTabId: ''
        }
    }
    public render() {
        const { selectedTabId } = this.state
        return (
            <Navbar className={classnames('bp3-dark')} fixedToTop>
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading>Guohao Yan</NavbarHeading>
                    <NavbarDivider />
                    <Tabs id="navigation-tabs" selectedTabId={selectedTabId}>
                        {links.map((obj, i) => (
                            <Tab id={`NavLink-${i}`} key={`NavLink-${i}`}>
                                <AnchorLink
                                    href={obj.to}
                                    onClick={() => this.linkOnClick(i)}
                                >
                                    <Button
                                        minimal
                                        text={obj.text}
                                        icon={obj.icon}
                                    />
                                </AnchorLink>
                            </Tab>
                        ))}
                    </Tabs>
                </NavbarGroup>
            </Navbar>
        )
    }

    private linkOnClick(id: number) {
        this.setState({
            selectedTabId: `NavLink-${id}`
        })
    }
}

export default Nav
