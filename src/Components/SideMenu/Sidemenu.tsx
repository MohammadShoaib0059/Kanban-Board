import React, { useContext, useState } from 'react';
import {
  Sidebar,
  Menu,
  SubMenu,
  menuClasses,
  MenuItemStyles,
  MenuItem,
} from 'react-pro-sidebar';
import { SelectorContextType } from '../../Common/Common';
import { SelectorContext } from '../../Context/SelectorContext';
import {AddIcon,ChevronLeftIcon,ChevronRightIcon,Groups3Icon, Controls,Button,SidebarFooter,SidebarHeader,Board,DeleteIcon} from '../../Common/imports';

// type Theme = 'light' | 'dark';

const themes = {
  light: {
    sidebar: {
      backgroundColor: '#ffffff',
      color: '#607489',
    },
    menu: {
      menuContent: '#fbfcfd',
      icon: '#0098e5',
      hover: {
        backgroundColor: '#c5e4ff',
        color: '#44596e',
      },
      disabled: {
        color: '#9fb6cf',
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: '#0b2948',
      color: '#8ba1b7',
    },
    menu: {
      menuContent: '#082440',
      icon: '#59d0ff',
      hover: {
        backgroundColor: '#00458b',
        color: '#b6c8d9',
      },
      disabled: {
        color: '#3e5e7e',
      },
    },
  },
};

export const Playground: React.FC = () => {
  const context = useContext<SelectorContextType | undefined>(SelectorContext);

  if (!context) {
    throw new Error('Sidemenu must be used within a SelectorContext.Provider');
  }

  const { role ,handleBoardDelete} = context;
  const { board, handleBoardClick, handleNewPlan } = context;
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  // const [broken, setBroken] = useState(false);
  const rtl = false;
  const hasImage = false;
  const theme = 'light';
  const BoardLocation = localStorage.getItem('boardId');
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(BoardLocation);

  const handleBoardSelection = (id: string) => {
    setSelectedTeamId(id);
    handleBoardClick(id);
  };

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
  
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: '#b6b7b9',
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(themes[theme].menu.menuContent, hasImage && !collapsed ? 0.4 : 1)
          : 'transparent',
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      '&:hover': {
        backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, hasImage ? 0.8 : 1),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        // onBreakPoint={setBroken}
        image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        rtl={rtl}
        breakPoint="md"
        backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1)}
        rootStyles={{
          color: themes[theme].sidebar.color,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '97vh' }}>
          <SidebarHeader rtl={rtl} style={{ marginBottom: '24px', marginTop: '16px' }} />
          <div style={{ flex: 1, marginBottom: '32px' }} className="custom-scrollbar">
            <div style={{ padding: '0 24px', marginBottom: '8px' }}>
              <Controls.Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
              >
                General
              </Controls.Typography>
            </div>
            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem onClick={handleNewPlan} icon={<AddIcon />} disabled={role === 'user'}>
                Plan New
              </MenuItem>
            </Menu>
            <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}>
              <Controls.Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
              >
                Teams
              </Controls.Typography>
            </div>
            <Menu menuItemStyles={menuItemStyles}>
              <SubMenu label='Teams' icon={<Groups3Icon />}>
                {board.map((item) => (
                  <MenuItem
                    key={item._id}
                    onClick={() => handleBoardSelection(item._id)}
                    style={{
                      backgroundColor: selectedTeamId === item._id ? hexToRgba(themes[theme].menu.hover.backgroundColor, hasImage ? 0.8 : 1) : 'transparent',
                      color: selectedTeamId === item._id ? themes[theme].menu.hover.color : themes[theme].menu.icon,
                      paddingRight: '16px',
                    }}
                  >
                    <Controls.Box display="flex" alignItems="center" justifyContent="space-between" textAlign='left' width="100%">
                      <Button sx={{ textTransform: 'none'}}>
                        {item.name}
                      </Button>
                      <Button onClick={()=>handleBoardDelete(item._id)}>
                        <DeleteIcon />
                      </Button>
                    </Controls.Box>
                  </MenuItem>
                ))}
              </SubMenu>
            </Menu>
          </div>
          <SidebarFooter collapsed={collapsed} />
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            position: 'absolute',
            top: '12%',
            right: '-15px',
            transform: 'translateY(-50%)',
            backgroundColor: '#0098e5',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </button>
      </Sidebar>

      <main style={{ flexGrow: 1, overflowX: 'auto', overflowY: 'hidden' }} className="custom-scrollbar">
        <Board />
      </main>
    </div>
  );
};
