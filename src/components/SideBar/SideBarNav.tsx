import { Stack} from '@chakra-ui/react';
import { NavSection } from './NavSection';
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri';
import { NavLink } from './NavLink';

export function SideBarNav () {
    return (
        <Stack spacing ="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                <NavLink icon={RiContactsLine}href="/users">Usuários</NavLink>
            </NavSection>
            <NavSection title="Automação">
                <NavLink icon={RiInputMethodLine} href="/forms">formulários</NavLink>
                <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
            </NavSection>
        </Stack>
    );
}