*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    background:linear-gradient(135deg,#6c63ff,#8e44ad);
    min-height:100vh;
    padding:30px;
    transition:0.3s;
}

.container{
    max-width:1000px;
    margin:auto;
}

.header-card{
    background:white;
    padding:30px;
    border-radius:12px;
    text-align:center;
    margin-bottom:20px;
}

#clock{
    font-size:3rem;
    color:#6c63ff;
}

#date{
    margin:10px 0;
    color:gray;
}

.grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:20px;
}

.card{
    background:white;
    padding:20px;
    border-radius:12px;
}

.full{
    grid-column:span 2;
}

#timer{
    font-size:3rem;
    text-align:center;
    margin:20px 0;
    color:#6c63ff;
}

.buttons button,
.task-input button,
.link-input button,
.name-box button,
#themeToggle{
    padding:8px 15px;
    border:none;
    border-radius:5px;
    background:#6c63ff;
    color:white;
    cursor:pointer;
}

.task-input,
.link-input,
.name-box{
    display:flex;
    gap:10px;
    margin-bottom:15px;
}

input{
    flex:1;
    padding:8px;
}

li{
    list-style:none;
    padding:10px;
    margin:8px 0;
    border:1px solid #ddd;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.task-left{
    display:flex;
    align-items:center;
    gap:10px;
}

.done{
    text-decoration:line-through;
    color:gray;
}

.link-btn{
    display:inline-block;
    padding:10px 15px;
    background:#6c63ff;
    color:white;
    text-decoration:none;
    border-radius:5px;
    margin:5px;
}

.dark{
    background:#121212;
}

.dark .card,
.dark .header-card{
    background:#1f1f1f;
    color:white;
}

.dark input{
    background:#2a2a2a;
    color:white;
    border:1px solid #444;
}

@media(max-width:768px){

    .grid{
        grid-template-columns:1fr;
    }

    .full{
        grid-column:span 1;
    }
}