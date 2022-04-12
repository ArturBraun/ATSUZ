package com.business.OnlineStore.common;

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
}
