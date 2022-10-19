import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9772FA'
  },
  header: {
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: '#FF5733',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 200,
    backgroundColor: 'lightskyblue',
    flexDirection: 'row'
  },
  title: {
    color: 'black',
    flex: 1,
    fontSize: 40,
    textAlign: 'center',
    margin: 0
  },
  author: {
    color: '902A0E',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    margin: 5
  },
  gameboard: {
    backgroundColor: '#FBEAEB',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  gameinfo: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    margin: 5,
    fontFamily: 'Caveat',
  },
  status: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 22,
    margin: 5,
    fontFamily: 'Roboto'
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: 'row'
  },
  button: {
    margin: 12,
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#FF69B4',
    width: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'black',
    fontSize: 18
  },
  grid: {
    margin: 4,
    alignItems: 'center',
    paddingBottom: 20
  },
  tulokset: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tuloksetOtsikko: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  tuloksetButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:3
  },
  yht: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    margin: 10,
    fontFamily: 'Caveat'
  },
  puuttuu: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    margin: 10,
    fontFamily: 'Caveat',
  },
  restart: {
    marginLeft: 140,
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start'
  },

})
