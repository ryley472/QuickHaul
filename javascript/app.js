document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  const SHEETS_ENDPOINT =
    "https://script.google.com/macros/s/AKfycbwPLEvdS9J2IvOUV3OjzR4c77qVIaeTgFU1BTfhwnQC4TnQInPz_flMYEL1EgIRPJTaEQ/exec";

  function router() {
    const route = window.location.hash.replace("#", "") || "landing";
    renderPage(route);
  }

  function renderPage(page) {
    app.innerHTML = "";

    switch (page) {
      case "landing":
        renderLanding();
        document.title = "Welcome | QuickHaul";
        break;
      case "home":
        renderHome();
        document.title = "Get a Free Quote | QuickHaul";
        break;
      case "help":
        renderHelp();
        document.title = "Help | QuickHaul";
        break;
      case "thank-you":
        renderThankYou();
        document.title = "Thank You | QuickHaul";
        break;
      default:
        app.innerHTML =
          '<div class="p-12 text-center text-red-600">404 - Page Not Found</div>';
    }
  }

  // ---------------- Landing Page ----------------
  function renderLanding() {
    app.innerHTML = `
        <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-50 text-center p-6">
        <div class="max-w-2xl bg-white rounded-2xl shadow-xl p-10 w-full">
            <h1 class="text-5xl font-extrabold text-green-600 mb-4">QuickHaul</h1>
            <p class="text-gray-700 text-lg mb-8 leading-relaxed">
            Fast, reliable <span class="font-semibold text-green-700">junk removal</span> — from single items to whole cleanouts.
            Connect with local professionals and get your space cleared out today.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="#home" class="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition shadow-md">
                🏠 Get a Quote
            </a>
            <a href="#help" class="bg-gray-100 text-gray-800 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition shadow-md">
                💬 Need Help?
            </a>
            </div>

            <div class="border-t border-gray-200 pt-6">
            <h2 class="text-lg font-semibold text-gray-800 mb-4">Now serving these areas:</h2>
            <div class="flex flex-wrap justify-center gap-3">
                <span class="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-sm hover:bg-green-200 cursor-default">Philadelphia, PA</span>
                <span class="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-sm hover:bg-green-200 cursor-default">Lansdale, PA</span>
                <span class="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-sm hover:bg-green-200 cursor-default">Norristown, PA</span>
                <span class="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-sm hover:bg-green-200 cursor-default">King of Prussia, PA</span>
                <span class="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-sm hover:bg-green-200 cursor-default">Doylestown, PA</span>
                <span class="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-sm hover:bg-green-200 cursor-default">Blue Bell, PA</span>
                <span class="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-sm hover:bg-green-200 cursor-default">Camden, NJ</span>
                <span class="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-sm hover:bg-green-200 cursor-default">Wilmington, DE</span>
            </div>
            </div>
        </div>

        <footer class="text-gray-500 text-sm mt-8">
            © ${new Date().getFullYear()} QuickHaul — Fast, Easy Junk Removal
        </footer>
        </div>
    `;
    }


  // ---------------- Home Page (quote form) ----------------
  function renderHome() {
  app.innerHTML = `
        <header class="bg-green-600 text-white text-center py-2 px-6">
                <h1 class="text-4xl font-bold mb-4">Fast & Easy Junk Removal</h1>
                <p class="text-lg">Enter your details below and get connected with a local junk removal provider today.</p>
        </header>
    <main class="flex justify-center items-start py-6 px-4">
      <form id="leadForm" class="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg">

        <!-- Compact Header & Back -->
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold text-gray-800">QuickHaul — Junk Removal Quote</h2>
          <a href="#landing" class="text-green-600 text-sm font-medium hover:underline">← Home</a>
        </div>

        <!-- Two Column: Name + Phone -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-sm font-medium mb-1">Name</label>
            <input type="text" name="Name" required class="w-full border rounded-lg px-3 py-2">
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Phone</label>
            <input type="tel" name="Phone" required class="w-full border rounded-lg px-3 py-2">
          </div>
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Email</label>
          <input type="email" name="Email" required class="w-full border rounded-lg px-3 py-2">
        </div>

        <!-- Location -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Location of Pickup</label>
          <input type="text" name="Location" required class="w-full border rounded-lg px-3 py-2">
        </div>

        <!-- Size with Other -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Size</label>
          <select name="Size" id="size" class="w-full border rounded-lg px-3 py-2">
            <option value="Single Item">Single Item</option>
            <option value="A Few Items">A Few Items</option>
            <option value="Room Full of Items">Room Full of Items</option>
            <option value="Whole House/Office Space">Whole House/Office Space</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            id="otherSize"
            name="OtherSize"
            placeholder="Please describe..."
            class="w-full border rounded-lg px-3 py-2 mt-3 hidden"
          >
        </div>

        <!-- Date -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Date Wanted By</label>
          <input
            type="date"
            name="Wanted"
            required
            class="w-full border rounded-lg px-3 py-2"
            min="${new Date().toISOString().split('T')[0]}"
          >
        </div>

        <!-- Submit -->
        <button type="submit"
          class="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
          Get My Quote
        </button>
      </form>
    </main>
  `;

  // --- Handle Other Size field ---
  const sizeSelect = document.getElementById("size");
  const otherSizeInput = document.getElementById("otherSize");
  sizeSelect.addEventListener("change", () => {
    if (sizeSelect.value === "Other") {
      otherSizeInput.classList.remove("hidden");
      otherSizeInput.required = true;
    } else {
      otherSizeInput.classList.add("hidden");
      otherSizeInput.required = false;
      otherSizeInput.value = "";
    }
  });

  // --- Handle Submit ---
  const form = document.getElementById("leadForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const entries = {};
    for (const [key, value] of formData.entries()) entries[key] = value;
    if (entries.Size === "Other" && entries.OtherSize) {
      entries.Size = `Other - ${entries.OtherSize}`;
      delete entries.OtherSize;
    }
    console.log("📤 Sending to Google Sheets (urlencoded):", entries);
    const payload = new URLSearchParams();
    Object.keys(entries).forEach((k) => payload.append(k, entries[k]));
    fetch(SHEETS_ENDPOINT, { method: "Post", body: payload })
      .then((res) => res.json())
      .then(() => {
        localStorage.setItem("lastSubmission", JSON.stringify(entries));
        window.location.hash = "thank-you";
      })
      .catch((err) => {
        console.error("❌ Error saving to Google Sheets:", err);
        alert("Something went wrong." + err);
      });
  });
}



  // ---------------- Help Page ----------------
  function renderHelp() {
    app.innerHTML = `
      <div class="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
        <div class="max-w-2xl bg-white rounded-2xl shadow-lg p-10">
          <h1 class="text-3xl font-bold text-green-600 mb-6">Need Help?</h1>
          <p class="text-gray-700 mb-4">
            If you have any issues or questions about your junk removal request, we’re here to help.
          </p>
          <ul class="text-left text-gray-700 mb-6 list-disc list-inside">
            <li>📞 Call us at <strong>267-454-1304</strong></li>
            <li>✉️ Email: <a href="mailto:support@quickhaulquote.com" class="text-green-600 underline">support@quickhaulquote.com</a></li>
            <li>🕐 Support Hours: 7 Days a Week, 8am–8pm EST</li>
          </ul>
          <a href="#landing" class="inline-block bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
            Back to Home
          </a>
        </div>
      </div>
    `;
  }

  // ---------------- Thank-You Page ----------------
  function renderThankYou() {
    const saved = localStorage.getItem("lastSubmission");
    let details = "";
    if (saved) {
      const data = JSON.parse(saved);
      details = `
        <div class="text-left mt-4 bg-gray-50 p-4 rounded-lg shadow">
          <h2 class="text-lg font-semibold mb-2">Your Details:</h2>
          <p><strong>Name:</strong> ${data.Name}</p>
          <p><strong>Phone:</strong> ${data.Phone}</p>
          <p><strong>Email:</strong> ${data.Email}</p>
          <p><strong>Location:</strong> ${data.Location}</p>
          <p><strong>Size:</strong> ${data.Size}</p>
          <p><strong>Wanted:</strong> ${data.Wanted}</p>
        </div>
      `;
    }

    app.innerHTML = `
      <div class="bg-white p-10 rounded-2xl shadow-md text-center mx-auto my-20 max-w-md">
        <h1 class="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p class="text-gray-700 mb-6">
          Your request has been received. We’ll connect you with a Quickhaul Specialist shortly.
        </p>
        ${details}
        <a href="#landing" class="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
          Back to Home
        </a>
      </div>
    `;
  }

  // ---------------- Init ----------------
  window.addEventListener("hashchange", router);
  router();
});