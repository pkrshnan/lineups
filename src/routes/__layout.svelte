<Header platformName="Lineups.gg" expandedByDefault={false} bind:isSideNavOpen>
    <div slot="skip-to-content">
        <SkipToContent />
    </div>

    <HeaderNav>
        <HeaderNavItem href="/" text="Home" />

        <HeaderNavMenu text="Agents">
            <HeaderNavItem href="/" text="Brimstone" />
            <HeaderNavItem href="/" text="Cypher" />
            <HeaderNavItem href="/" text="KAY/O" />
            <HeaderNavItem href="/" text="Killjoy" />
            <HeaderNavItem href="/" text="Phoenix" />
            <HeaderNavItem href="/" text="Sage" />
            <HeaderNavItem href="/" text="Sova" />
            <HeaderNavItem href="/" text="Viper" />
        </HeaderNavMenu>
    </HeaderNav>

    <SideNav bind:isOpen={isSideNavOpen}>
        <SideNavItems>
            <SideNavLink text="Home" />
            <SideNavMenu text="Agents">
                <SideNavMenuItem href="/" text="Brimstone" />
                <SideNavMenuItem href="/" text="Cypher" />
                <SideNavMenuItem href="/" text="KAY/O" />
                <SideNavMenuItem href="/" text="Killjoy" />
                <SideNavMenuItem href="/" text="Phoenix" />
                <SideNavMenuItem href="/" text="Sage" />
                <SideNavMenuItem href="/" text="Sova" />
                <SideNavMenuItem href="/" text="Viper" />
            </SideNavMenu>
            <SideNavDivider />
        </SideNavItems>
    </SideNav>
</Header>

<Content>
    <slot></slot>
</Content>


<script lang="ts">
    import "carbon-components-svelte/css/g100.css";
    import "../app.postcss";

    import {
        Header,
        HeaderNav,
        HeaderNavItem,
        HeaderNavMenu,
        SkipToContent,
        SideNav,
        SideNavItems,
        SideNavMenu,
        SideNavMenuItem,
        SideNavLink,
        SideNavDivider,
        Content
    } from "carbon-components-svelte";

    let isSideNavOpen = false;
</script>

