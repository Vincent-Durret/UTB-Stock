<template>
    <div class="subpage">
         <div class="sub-card">
            <div class="sub-wrap">
                <p>{{ sub.name }}: <input type="number" placeholder="Nombre de lames" /> <button>Envoyer</button> {{ sub.total }}
                </p>
            </div>
        </div>
    </div>
</template>


<script>
    export default {        
        name: "SubPage",
    props: {
        sub: Object,
    },
    }
</script>

<style lang="scss" scoped>
    main {
        background: #f0f7ee;
        min-height: 100vh;
    }
    
    .subpage {
    
        .sub-card {
            display: flex;
        }
    
        .sub-wrap {
            margin: 15px;
            box-sizing: border-box;
            width: 16rem;
            height: 15rem;
            background: var(--primary);
            border-radius: 5%;
            display: flex;
            justify-content: center;
            align-items: center;
    
        }
    
    
        p {
            display: flex;
            align-items: center;
            line-height: 2rem;
            flex-direction: column;
            font-size: 1.2rem;
            margin: 0 auto;
            line-height: 3rem;
        }
    
        input[type=number]:focus {
            border-radius: 10px;
            border: 1px solid var(--dark); 
            transition: 0.2s;
            border-radius: 2px;
    
        }
    
        button {
            margin-top: 10px;
            border-radius: 15px;
            background-color: var(--dark);
            padding: 10px;
            color: var(--light);
            transition: 0.2s;
    
            &:hover {
                box-shadow: rgb(38, 57, 77) 0px 10px 15px -10px;
                background-color: var(--dark-alt);
                transform: scale(0.95, 0.95);
            }
        }
    
    }
    
    @media (max-width: 760px) {
        .subpage-hardware-store {
            .card {
                display: flex;
                flex-direction: column;
                transition: 0.5s;
                margin-left: -10px;
            }
    
            .wrap {
                margin: 10px;
            }
        }
    }
    </style>