const style = document.createElement('style');
    style.innerHTML = `
        #virtualPopup {
            display: none;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: #2c2c2c;
            border: 2px solid #1a1a1a;
            padding: 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
            z-index: 1000;
            border-radius: 8px;
            color: #e0e0e0;
            width: 300px;
            text-align: center;
        }

        #virtualPopup h3 {
            margin: 0;
            padding-bottom: 10px;
            font-size: 20px;
            color: #00aaff;
        }

        #virtualPopup p {
            font-size: 16px;
            margin: 10px 0;
        }

        #closePopup {
            margin-top: 15px;
            padding: 10px 20px;
            border: none;
            background-color: #00aaff;
            color: white;
            cursor: pointer;
            border-radius: 4px;
            font-size: 16px;
            transition: background-color 0.3s, transform 0.3s;
        }

        #closePopup:hover {
            background-color: #0088cc;
            transform: scale(1.05);
        }

        #overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 999;
        }
    `;
    document.head.appendChild(style);

    // Create virtual popup HTML
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.appendChild(overlay);

    const popup = document.createElement('div');
    popup.id = 'virtualPopup';
    popup.innerHTML = `
        <h3>Warning</h3>
        <p>Viewing source code functionality has been disabled.</p>
        <button id="closePopup">Close</button>
    `;
    document.body.appendChild(popup);

    // Show virtual popup
    function showPopup(message) {
        const popupMessage = popup.querySelector('p');
        popupMessage.textContent = message;
        popup.style.display = 'block';
        overlay.style.display = 'block';
    }

    // Hide virtual popup
    function hidePopup() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }

    // Bind close button event
    document.getElementById('closePopup').addEventListener('click', hidePopup);

    // Disable Ctrl+U and F12
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            showPopup("Viewing source code functionality has been disabled");
        }
        
        if (e.key === 'F12') {
            e.preventDefault();
            showPopup("Developer tools have been disabled");
        }
    });

    // Disable right-click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showPopup("Right-click functionality has been disabled");
    });
