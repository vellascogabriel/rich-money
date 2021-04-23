import richMoney from '../../assets/rich-money.png'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps){
    
    return(
        <Container>
            <Content>
            <div className="logoContent">
                <img src={richMoney} alt="dtmoney" /><span>Rich Money</span>
            </div>
            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova transação
            </button>
            </Content>
        </Container>
    )
}