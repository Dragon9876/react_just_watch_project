interface INavLinks {
   navLinks: INavLink[]
}

interface INavLink {
   to: string
}

export const NavLinksData: INavLinks = {
   navLinks: [{ to: '/home' }, { to: '/new' }, { to: '/popular' }, { to: '/watchlist' }],
}
