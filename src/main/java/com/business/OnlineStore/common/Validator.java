package com.business.OnlineStore.common;

import com.business.OnlineStore.model.Order;

public class Validator {
    public static boolean isValidEmail(String email) throws ValidationException{
        String regex = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
                        + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";

        if(!email.matches(regex)) throw new ValidationException("Email jest niepoprawny!");
        return true;
    }

    public static boolean isValidOrderId(String orderIdStr) throws ValidationException{
        try{
            Long orderId = Long.parseLong(orderIdStr);
            if(orderId < 1) throw new NumberFormatException("");
        }
        catch (NumberFormatException ex){
            throw new ValidationException("Numer zamówienia jest niepoprawny!");
        }
        return true;
    }

    public static boolean isValidPaymentMethod(String paymentMethod) throws ValidationException{
        if(!(paymentMethod.equals(Order.PAY_BY_CARD) || paymentMethod.equals(Order.PAY_BY_CASH))) {
            throw new ValidationException("Metoda płatności jest niepoprawna!");
        }
        return true;
    }

    public static boolean isValidPhoneNumber(String phoneNumber) throws ValidationException{
        String regex = "^\\d{9}$";

        if(!phoneNumber.matches(regex)) throw new ValidationException("Numer telefonu jest niepoprawny! Numer telefonu powinien składać się jedynie z 9 cyfr.");
        return true;
    }

    public static boolean isValidCity(String city) throws ValidationException{
        String regex = "^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$";

        if(!(city.matches(regex) && city.length() <= 100)) throw new ValidationException("Miasto jest niepoprawne!");
        return true;
    }

    public static boolean isValidPostCode(String postcode) throws ValidationException{
        String regex = "^[0-9]{2}-[0-9]{3}$";

        if(!(postcode.matches(regex) && postcode.length() <= 10)) throw new ValidationException("Kod pocztowy jest niepoprawny!");
        return true;
    }

    public static boolean isValidAddress(String address) throws ValidationException{
        if(address.length() > 255) throw new ValidationException("Adres jest niepoprawny!");
        return true;
    }

    public static boolean isValidSurname(String surname) throws ValidationException{
        String regex = "^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$";

        if(!(surname.matches(regex) && surname.length() <= 50)) throw new ValidationException("Nazwisko jest niepoprawne!");
        return true;
    }

    public static boolean isValidName(String name) throws ValidationException{
        String regex = "^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$";

        if(!(name.matches(regex) && name.length() <= 50)) throw new ValidationException("Imie jest niepoprawne!");
        return true;
    }
}
