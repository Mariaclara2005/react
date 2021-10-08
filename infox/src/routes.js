import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './home';
import Carrinho from './carrinho';
import DetalheProduto from './detalheproduto';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/carrinho" exact={true} component={Carrinho} />
                <Route path="/detalhe" exact={true} component={DetalheProduto} />
            </Switch>
        </BrowserRouter>
    )
}