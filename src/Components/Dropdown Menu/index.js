import { useNavigate } from 'react-router-dom'
import menu from './../../Images/Sanduiche.svg';
import './style.css';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';




function ButtonMenu(){
    let redirect = useNavigate()

    return(
        <>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                        
                            
                        <button type="menu"> <img src={menu} />Menu</button>
                        
                </DropdownMenu.Trigger>

                <div className='caixinha'>
                    <DropdownMenu.Content sideOffset={5}>

                        <DropdownMenu.Arrow />

                        

                        <DropdownMenu.Item onClick={() => {redirect('/profile')}}> 
                            <a href='' >Configurações</a>
                        </DropdownMenu.Item>

                        <DropdownMenu.Separator />

                        <DropdownMenu.Item onClick={() => {redirect('/')}}> 
                            <a href='' >Desconectar</a>
                        </DropdownMenu.Item>

                    

                        
                    </DropdownMenu.Content>
                </div>
            </DropdownMenu.Root>
        </>
    )
}
 
export default ButtonMenu;