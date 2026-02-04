function openModal(compId) {
    const modal = document.getElementById('modal-container');
    const contentArea = document.getElementById('competence-detail');
    const solarSystem = document.querySelector('.solar-system');
    
    const data = competenceData[compId];

    if (data) {
        solarSystem.classList.add('zoom-active');
        contentArea.innerHTML = `
            <h2>${data.titre}</h2>
            <div style="margin-top:20px;">
                <p><strong>🚀 Projet :</strong> ${data.projet}</p>
                <p><strong>📄 Description :</strong> ${data.description}</p>
                <p><strong>🛠️ Mon Rôle :</strong> ${data.role}</p>
                <div style="background:#2a2a2a; padding:10px; border-radius:5px; margin-top:15px;">
                    <strong>📂 Livrables :</strong>
                    <ul>${data.livrables.map(l => `<li>${l.nom} (${l.type})</li>`).join('')}</ul>
                </div>
                <p style="font-style:italic; margin-top:15px;"><strong>🧠 Analyse :</strong> ${data.analyse}</p>
            </div>
        `;
        setTimeout(() => { modal.classList.remove('hidden'); }, 400);
    }
}

function closeModal() {
    document.getElementById('modal-container').classList.add('hidden');
    document.querySelector('.solar-system').classList.remove('zoom-active');
}

// Fermeture au clic extérieur
window.onclick = (e) => { if(e.target == document.getElementById('modal-container')) closeModal(); }