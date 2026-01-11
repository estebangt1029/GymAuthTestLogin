const session = JSON.parse(localStorage.getItem("session"));

if(!session){
    window.location.href = "/auth/login.html";
}

// Protege por rol
const path = window.location.pathname;

if(path.includes("/superadmin") && session.role !== "superadmin"){
    window.location.href = "/auth/login.html";
}

if(path.includes("/admin") && session.role !== "admin"){
    window.location.href = "/auth/login.html";
}

if(path.includes("/client") && session.role !== "client"){
    window.location.href = "/auth/login.html";
}

// Si la cuenta está suspendida
if(session.status !== "active"){
    window.location.href = "/auth/login.html";
}
