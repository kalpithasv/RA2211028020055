import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
    const analyticsDiv = document.getElementById("analytics");

    const data = [
        { platform: "Facebook", users: 2500 },
        { platform: "Instagram", users: 1800 },
        { platform: "Twitter", users: 1200 },
        { platform: "LinkedIn", users: 900 },
    ];

    analyticsDiv.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            ${data.map((item) => `
                <div class="p-4 bg-white shadow-lg rounded-lg text-center">
                    <h2 class="text-xl font-semibold">${item.platform}</h2>
                    <p class="text-2xl font-bold text-blue-600">${item.users} users</p>
                </div>
            `).join("")}
        </div>
    `;
});
