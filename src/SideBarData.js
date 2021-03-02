import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import ComputerIcon from '@material-ui/icons/Computer';


export const SideBarData = [
  {
    title: "Login",
    icon: <HomeIcon />,
    link: "link"

  },
  {
    title: "PokeDex",
    icon: <SearchIcon />,
    link: "PokeDex"

  },
  {
    title: "Game",
    icon: <VideogameAssetIcon />,
    link: <PokemonList/>

  },
  {
    title: "PC",
    icon: <ComputerIcon />,
    link: "Game"
  }
]
