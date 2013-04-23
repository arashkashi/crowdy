import web
import json
        
urls = (
    '/(.*)', 'crowdy'
)
app = web.application(urls, globals())

class crowdy:        
    def GET(self, name):
        web.header('Access-Control-Allow-Origin',      '*')
        web.header('Access-Control-Allow-Credentials', 'true')
        cmd = self.processCmd(name)
        if cmd.keys()[0].lower() == 'getgame':
            return self.getAGame()
        else:
            return 'Command nottttt found'

    def getAGame(self):
        # TODO: for now we are going to have a default game
        return json.dumps(	{	'TFs':[{'name':'TF1', 'specie':'human', 'location':5},  	\
        										{'name':'TF2', 'specie':'mice', 'location':7},		\
        										{'name':'TF4', 'specie':'human', 'location':19}, 	\
        										{'name':'TF2', 'specie':'mice', 'location':6},		\
        												{'name':'TF3', 'specie':'vampire', 'location':6}		\
        										],													\
        								'species':['human', 'mice', 'vampire'],	\
        								'TFsSet':['TF1', 'TF2', 'TF3', 'TF4']
        										})
        # return json.dumps(	{	'TFs':[{'name':'TF1', 'specie':'human', 'location':5},  	\
        # 										# {'name':'TF2', 'specie':'mice', 'location':5},		\
        # 										# {'name':'TF1', 'specie':'human', 'location':20}, 	\
        # 										# {'name':'TF2', 'specie':'mice', 'location':90}		\
        # 										],													\
        # 								'species':['human'],	\
        # 								'TFsSet':['TF1']
        # 										})


    def processCmd(self, name):
        """returns a dictionary {'comandName':{'arg_1':'value_1,...}}
        inpurt commands are in the following format:
        /comandName/arg1=vaule1/arg2=value2"""
        result = {}
        for i, value in enumerate(name.split('/')):
            if i == 0: 
                result[value] = {}
                continue
            argName = value.split('=')[0]
            argValue = value.split('=')[1]
            result[result.keys()[0]][argName] = argValue
        return result

if __name__ == "__main__":
    app.run()