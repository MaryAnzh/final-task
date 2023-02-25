export const EmailLetter = (): JSX.Element => (
    <article style={{borderRadius: 4, overflow: 'hidden', display: 'flex', flexDirection: 'column', width: '100%', boxShadow: '0 0 10px rgba(0, 0, 0, .2)', maxWidth: '400px'}}>
        <header style={{width: '100%', background: '#314AD7', padding: '20px', color: 'white', fontSize: '25px'}}>
            <h1 style={{color: 'white'}}>Thank you for subscription</h1>
        </header>
        <main style={{width: '100%', background: 'white', padding: '30px'}}>
            <img src="https://raw.githubusercontent.com/MaryAnzh/final-task-assets/main/img/bg1.png" width="100%"/>
            <p style={{padding: '20px 0', fontSize: 15}}>Dear visitor, thanks for visiting our web-application. We created it using TypeScript, NextJs & React. Hope, you had no problems with user experience during surfing through our site.</p>

            <hr style={{marginBottom: 20, marginTop: 20}}/>
            <span style={{fontSize: 20}}>What about some useful links ?</span>
            <a href="https://github.com/MaryAnzh" target="_blank" style={{borderRadius: 3, background: '#314AD7', display: 'flex', marginTop: 10, padding: 10, color: 'white', width: '100%'}}>Mary's GitHub repository</a>
            <a href="https://github.com/DmitryBaranovAndreevich" target="_blank" style={{borderRadius: 3, background: '#314AD7', display: 'flex', marginTop: 10, padding: 10, color: 'white', width: '100%'}}>Dmitry's GitHub repository</a>
            <a href="https://github.com/user-of-github" target="_blank" style={{borderRadius: 3, background: '#314AD7', display: 'flex', marginTop: 10, padding: 10, color: 'white', width: '100%'}}>Nikita's GitHub repository</a>
        </main>
    </article>
)
