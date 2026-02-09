// EMPIRE - Moteur de l'IA pour les accès
// Ce script permet à l'IA de générer un code quand Samuel le demande.

function genererCodeEmpire() {
    const caracteres = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let codeFinal = "EMP-";
    
    for (let i = 0; i < 6; i++) {
        codeFinal += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    
    return codeFinal;
}

// Pour Samuel : Ce code est maintenant prêt. 
// L'IA l'utilisera pour créer les accès des nouveaux abonnés.