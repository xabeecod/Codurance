import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

public class myGETrequest {

    public myGETrequest(String baseUrl, String lat, String lon, String APIkey) {
        System.out.println("myGETrequest");
        URL urlForGetRequest = null;
        try {
            urlForGetRequest = new URL(baseUrl + "data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey);
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
        String readLine = null;
        HttpURLConnection conection = null;
        try {
            conection = (HttpURLConnection) urlForGetRequest.openConnection();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        try {
            conection.setRequestMethod("GET");
        } catch (ProtocolException e) {
            throw new RuntimeException(e);
        }
        int responseCode = 0;
        try {
            responseCode = conection.getResponseCode();
            System.out.println("it worked");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


        if (responseCode == HttpURLConnection.HTTP_OK) {
            BufferedReader in = null;
            try {
                in = new BufferedReader(
                        new InputStreamReader(conection.getInputStream()));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            StringBuffer response = new StringBuffer();
            while (true) {
                try {
                    if (!((readLine = in.readLine()) != null)) break;
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
                response.append(readLine);
            }
            try {
                in.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            System.out.println("JSON String Result " + response.toString());
            if (response.toString().contains("country")==false) { System.out.println("FAIL!, no country!"); }
            // add + cases
        } else {
            System.out.println("GET NOT WORKED");
        }
    }

    public void MyGETrequest(String baseUrl, String lat, String lon, String APIkey) throws IOException {
    }
}
