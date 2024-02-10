
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage } from "@ionic/react";
import { Menu } from "../Icons";
const TooltipsTop = () => {
    return (
        <>
            <IonMenu contentId="main-content" >
                <IonContent>
                    <p className="text-red-200">This is the menu content.</p>
                    <p className="text-red-700">This is the menu content.</p>
                    <p className="text-red-200">This is the menu content.</p>
                </IonContent>
            </IonMenu>
            <IonPage id="main-content">
                <IonHeader className="p-4">
                    <div>
                        <IonButtons slot="start">
                            <IonMenuButton className="text-dark"><Menu /></IonMenuButton>
                        </IonButtons>
                    </div>
                </IonHeader>
                <IonContent className="ion-padding">Tap the button in the toolbar to open the menu.</IonContent>
            </IonPage>
        </>
    )
}

export default TooltipsTop