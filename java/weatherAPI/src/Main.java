import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

public class Main {
    private static URL url;

    public static void main(String[] args) {
        // System.out.println("myGETrequest");
        String baseUrl = "http://api.openweathermap.org/";
        String lon = "48.85";
        String lat = "48.85";
        String APIkey = "c867e0d33a197ee4c986b13a9338a32d";
        URL urlForGetRequest = null;
        new myGETrequest(baseUrl, lat, lon, APIkey);
        for (int latitude =  0; latitude <= 40; latitude++) {              // from -90 to 90, but may be excessive
            for (int longitude =  0; longitude <= 50; longitude++) {       // from -180 to 180
                new myGETrequest(baseUrl, String.valueOf(latitude), String.valueOf(longitude), APIkey);

            }
        }
    }
}