import{ test, expect } from '@playwright/test';
import { AccountPage } from '../pages/accountPage';

test('Login Test', async ({page}) => {

   // Données de Login
   const email = 'inqom.qaautomationapplicant@gmail.com';
   const password = 'o5N,d5ZR@R7^';

   const login = new AccountPage(page);

   // Accéder à la page Account
   await login.gotoAccountPage();

   // Cliquer sur le bouton "se connecter"
   await login.clickLoginButton();

   // Remplir les champs d'authentification
   await login.fillCredentials(email, password);

   // Cliquer sur le bouton "se connecter"
   await login.clickConnectButton();

   // Verifier que l'onglet "mon compte" est bien selectionné quand je me connecte
   await login.accountSelected();

   // Uploader une photo de profil
   await login.uploadImageProfile();

   // Vérifier que l'image a bien été uploadée
   await login.verifyImageProfile();

   // Enregistrer les modifications
   await login.saveChanges();

  });
  