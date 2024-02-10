//Dependencias
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

//Componentes
import { Home } from '../pages/index';
import TooltipLayout from '../layouts/TooltipLayout';

const Routes = () => {
    return (
        <IonReactRouter>
            {/* Tooltips */}
            <TooltipLayout>
                <IonRouterOutlet>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/contacts">
                        <Home />
                    </Route>
                    <Route exact path="/matchs">
                        <Home />
                    </Route>
                    <Route exact path="/perfil">
                        <Home />
                    </Route>
                    <Route exact path="/options">
                        <Home />
                    </Route>
                </IonRouterOutlet>
            </TooltipLayout>
            {/* Tooltips */}

            {/* NoTooltip */}
            <IonRouterOutlet>

            </IonRouterOutlet>
            {/* NoTooltip */}

            {/* TopTooltipOnly */}
            <IonRouterOutlet>

            </IonRouterOutlet>
            {/* TopTooltipOnly */}
        </IonReactRouter >
    )
}

export default Routes