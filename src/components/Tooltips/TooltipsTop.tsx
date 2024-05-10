
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage } from "@ionic/react";
import { Menu, Bell, AnteiaLogo } from "../Icons";
const TooltipsTop = () => {
    return (
        <>
            <IonPage id="main-content">
                <IonHeader className="p-4 shadow-none">
                    <div>
                        <IonButtons slot="start" class="flex justify-between">
                            {/* <IonMenuButton className="text-dark"><Menu /></IonMenuButton> */}
                            <button ><AnteiaLogo /></button>
                            <button><Bell /></button>
                        </IonButtons>
                    </div>
                </IonHeader>
                <IonContent className="ion-padding">Tap the button in the toolbar to open the menu.</IonContent>
            </IonPage>
        </>
    )
}

export default TooltipsTop