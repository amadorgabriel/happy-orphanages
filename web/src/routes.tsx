import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> {/*Apenas uma rota poderá ser chamada */}
                <Route exact path="/" component={Landing} />
                <Route path="/app" component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    )
}