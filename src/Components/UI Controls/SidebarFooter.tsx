import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { Tooltip, Typography, tooltipClasses, TooltipProps } from '@mui/material';
import { AuthContext } from '../../Context/AuthContext';
import { SelectorContextType } from '../../Common/Common';
import { SelectorContext } from '../../Context/SelectorContext';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from "@mui/icons-material/Logout";
import {Controls} from '../../Common/imports';

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  collapsed?: boolean;
}

const StyledButton = styled.a`
  padding: 5px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: inline-block;
  background-color: #fff;
  color: #484848;
  text-decoration: none;
`;

const StyledSidebarFooter = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  color: white;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
`;

const StyledCollapsedSidebarFooter = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  color: white;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
`;

const CustomPersonIcon = styled(PersonIcon)`
  color: #484848;
  margin-right: 4px;
`;

const CustomWorkIcon = styled(WorkIcon)`
  color: #484848;
  margin-right: 4px;
`;

const CustomLogoutIcon = styled(LogoutIcon)`
  color: red;
  margin-right: 4px;
`;

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#fff',
    color: '#484848',
    boxShadow:"",
    fontSize: 12,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#fff',
  },
}));

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ children, collapsed, ...rest }) => {
  const context = useContext<SelectorContextType | undefined>(SelectorContext);

  if (!context) {
    throw new Error('Board must be used within a SelectorContext.Provider');
  }

  const { credentials, role } = context;
  const authcontext = useContext(AuthContext);

  if (!authcontext) {
    throw new Error('Playground must be used within an AuthContext.Provider');
  }

  const { handlelogout } = authcontext;

  const tooltipContent = (
    <React.Fragment>
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px', width: '140px' }}>
        <CustomPersonIcon />
        <Controls.Typography variant="body2">{credentials}</Controls.Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <CustomWorkIcon />
        <Controls.Typography variant="body2">{role}</Controls.Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <CustomLogoutIcon onClick={handlelogout}/>
        <Controls.Typography variant="body2">Logout</Controls.Typography>
      </div>
    </React.Fragment>
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
      {collapsed ? (
        <CustomTooltip title={tooltipContent} arrow>
          <StyledCollapsedSidebarFooter>
            <CustomPersonIcon />
          </StyledCollapsedSidebarFooter>
        </CustomTooltip>
      ) : (
        <StyledSidebarFooter {...rest}>
          <div style={{ marginTop: '10px', marginLeft: '30px' }}>
            <CustomTooltip title={tooltipContent} arrow>
             {role === 'admin' ? <img
                src="../src/assets/admin.png"
                alt="User"
                style={{ width: '60%', height: 'auto', borderRadius: '50%', cursor: 'pointer' }}
              /> :  <img
              src="../src/assets/user.jpg"
              alt="User"
              style={{ width: '60%', height: 'auto', borderRadius: '50%', cursor: 'pointer' }}
            />
              }
            </CustomTooltip>
          </div>
        </StyledSidebarFooter>
      )}
    </div>
  );
};
