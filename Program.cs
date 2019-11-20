using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            string prescription = "";
            string coating = "";
            double total = 0;

            while (prescription != "1" && prescription != "2")
            {
                Console.WriteLine("What kind of glasses would you like \n 1 -> prescription, 2 -> non-prescription : ");
                prescription = Console.ReadLine();
            }
            while (coating != "1" && coating != "2")
            {
                Console.WriteLine("What kind of coating would you like \n 1 -> anti-glare, 2 -> brown tint : ");
                coating = Console.ReadLine();
            }

            if (prescription == "1")
            {
                total += 40;
            }
            else
            {
                total += 25;
            }
            if (coating == "1")
            {
                total += 12.5;
            }
            else
            {
                total += 9.99;
            }
            Console.WriteLine("Your total is: $" + total);
            Console.Read();
        }
    }
}
