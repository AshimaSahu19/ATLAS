from fastapi import FastAPI

app = FastAPI(title='ATLAS API')

@app.get('/')
def read_root():
    return {'message': 'Welcome to ATLAS API'}
