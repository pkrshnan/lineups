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

<Header platformName="Lineups.gg" expandedByDefault={false} bind:isSideNavOpen>
    <div slot="skip-to-content">
        <SkipToContent />
    </div>

    <HeaderNav>
        <HeaderNavItem href="/" text="Home" />

        <HeaderNavMenu text="Agents">
            <HeaderNavItem href="/agents/brimstone" text="Brimstone" />
            <HeaderNavItem href="/agents/cypher" text="Cypher" />
            <HeaderNavItem href="/agents/kayo" text="KAY/O" />
            <HeaderNavItem href="/agents/killjoy" text="Killjoy" />
            <HeaderNavItem href="/agents/phoenix" text="Phoenix" />
            <HeaderNavItem href="/agents/sage" text="Sage" />
            <HeaderNavItem href="/agents/sova" text="Sova" />
            <HeaderNavItem href="/agents/viper" text="Viper" />
        </HeaderNavMenu>
    </HeaderNav>

    <SideNav bind:isOpen={isSideNavOpen}>
        <SideNavItems>
            <SideNavLink text="Home" />
            <SideNavMenu text="Agents">
              <SideNavMenuItem href="/agents/brimstone" text="Brimstone" />
              <SideNavMenuItem href="/agents/cypher" text="Cypher" />
              <SideNavMenuItem href="/agents/kayo" text="KAY/O" />
              <SideNavMenuItem href="/agents/killjoy" text="Killjoy" />
              <SideNavMenuItem href="/agents/phoenix" text="Phoenix" />
              <SideNavMenuItem href="/agents/sage" text="Sage" />
              <SideNavMenuItem href="/agents/sova" text="Sova" />
              <SideNavMenuItem href="/agents/viper" text="Viper" />
            </SideNavMenu>
            <SideNavDivider />
        </SideNavItems>
    </SideNav>
</Header>

<Content>
    <slot></slot>
</Content>
