import { Box, Dialog,styled } from '@mui/material'
import React from 'react'
import Menu from './menu/Menu'
import EmptyChat from './chat/EmptyChat'
import ChatBox from './chat/ChatBox'

const dialogStyle = {
    height: "95%",
    margin: "20px",
    width: "100%",
    borderRadius: 0,
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden"
}
const Component=styled(Box)`
    display: flex;

`;
const LeftComponent=styled(Box)`
    min-width: 450px;
`;

const RightComponent=styled(Box)`
    min-width: 300px;
    width: 73%;
    height: 100%;
    border-left: 1px solid rgba(0,0,0,0.14);
`
const ChatDialog = () => {
    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true} maxWidth={'md'}>
            <Component>
                <LeftComponent>
                    <Menu/>
                </LeftComponent>
                <RightComponent>
                    {/* <EmptyChat/> */}
                    <ChatBox/>
                </RightComponent>
            </Component>
        </Dialog>
    )
}

export default ChatDialog